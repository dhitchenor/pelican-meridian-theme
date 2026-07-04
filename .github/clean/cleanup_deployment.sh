#!/bin/bash
# Cleans up GitHub deployment history for a repo.
# Requires: gh CLI, authenticated (gh auth login)
set -e

REPO="dhitchenor/pelican-meridian-theme"

echo "Fetching deployments for $REPO..."
gh api "repos/$REPO/deployments?per_page=100" | jq -c '.[]' | while read -r d; do
  ID=$(echo "$d" | jq -r '.id')
  SHA=$(echo "$d" | jq -r '.sha')
  echo "Marking deployment $ID ($SHA) inactive, then deleting..."
  gh api --method POST "repos/$REPO/deployments/$ID/statuses" -f state=inactive >/dev/null
  gh api --method DELETE "repos/$REPO/deployments/$ID" \
    && echo "  deleted $ID" \
    || echo "  could not delete $ID (likely the current active deployment - safe to ignore)"
done

echo "Done. Re-run this if there were more than 100 (pagination)."
