Title: My first project write-up
Date: 2026-07-10
Category: Projects
Tags: python, projects

Some notes on how the weekend project came together.

```python
def read_frame(bus, timeout=1.0):
    frame = bus.recv(timeout)
    if frame is None:
        raise TimeoutError("no frame received")
    return frame
```

More text after the code block, to show how paragraphs wrap under a snippet.
