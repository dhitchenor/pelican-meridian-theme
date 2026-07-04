# Cleans up GitHub deployment history for a repo.
# Requires: gh CLI, authenticated (gh auth login)

$repo = "dhitchenor/pelican-meridian-theme"

Write-Host "Fetching deployments for $repo..."
$deployments = gh api "repos/$repo/deployments?per_page=100" | ConvertFrom-Json

foreach ($d in $deployments) {
    $id = $d.id
    $sha = $d.sha
    Write-Host "Marking deployment $id ($sha) inactive, then deleting..."

    gh api --method POST "repos/$repo/deployments/$id/statuses" -f state=inactive | Out-Null
    gh api --method DELETE "repos/$repo/deployments/$id" 2>$null

    if ($LASTEXITCODE -eq 0) {
        Write-Host "  deleted $id"
    } else {
        Write-Host "  could not delete $id (likely the current active deployment - safe to ignore)"
    }
}

Write-Host "Done. Re-run this if there were more than 100 (pagination)."
