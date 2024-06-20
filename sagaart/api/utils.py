def get_object_by_filter(model, search, param):
    result = model.objects.filter(
        name=param
    ).first()
    return result
