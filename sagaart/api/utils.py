def get_object_by_filter(model, search, param):
    return rmodel.objects.filter(
        name=param
    ).first()
