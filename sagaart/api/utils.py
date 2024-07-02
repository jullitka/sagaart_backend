def get_object_by_filter(model, search, param):
    return model.objects.filter(
        name=param
    ).first()
