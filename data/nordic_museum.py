def is_core_id(nm_id: str) -> bool:
    if nm_id.startswith('NM.'):
        nm_id = nm_id[3:]

    return nm_id.isdigit()
