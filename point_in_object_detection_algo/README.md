# Point-In-Object Detection Challenge

## Overview

In this challenge, you’ll demonstrate your spatial reasoning and data manipulation skills by identifying which polygonal object(s) contain a given point.

This simulates a common task in computer vision and geospatial analysis: determining whether a coordinate falls within a defined region.

## Files Provided

### Objects JSON File

`objects.json`: A JSON file enumerating a set of 2D polygonal objects. Each object has an `id` and a list of `(x, y)` coordinates that form a closed shape (polygon).

You can assume:

- each polygon has exactly 4 point coordinates
- the points coordinates are listed in clockwise order
- all polygons are convex

Example format:
```json
{
  "objects": [
    {
      "id": "obj1",
      "coordinates": [[10, 10], [20, 10], [20, 20], [10, 20]]
    }
  ]
}
```

### Solution Python Script

`solution.py`: A python script containing the function signature for the task solution.

Function signature:

```py
def find_containing_objects(point: tuple[int, int], objects_file_path: str) -> list[str]:
    """
    Given a 2D point (x, y) and a path to the objects JSON file,
    return a list of object IDs that contain the point.

    Parameters:
    - point: Tuple of (x, y) coordinates
    - objects_file_path: Path to a JSON file enumerating polygon objects

    Returns:
    - A list of string object IDs that contain the point
    """
```

## Your Task

Write a function in Python that takes a 2D point, represented by an `(x: int, y: int)` coordinate, and identifies which objects (if any) the point lies within, i.e., returns a list of `id: str`.

Feel free to use common Python libaries of your choosing, e.g., Numpy, Pandas, etc.