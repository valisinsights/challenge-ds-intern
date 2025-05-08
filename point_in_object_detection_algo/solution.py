
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
    # start coding here