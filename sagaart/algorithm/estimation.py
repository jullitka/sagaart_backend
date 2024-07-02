from catboost import CatBoostRegressor
import numpy as np

from artists.models import ArtistModel, ExhibitionParticipantModel
from .constants import MODEL_PATH
try:    
    from .Paintings_v2 import preprocess
except ModuleNotFoundError:
    print('Отсутствует модуль Paintings_v2')
from .processing_data import ProcessingArtworkDataToEstimate


def get_author_data(author_name):
    """Получение данных о выставках автора из базы"""
    author = ArtistModel.objects.get(name=author_name)
    exhibitions = ExhibitionParticipantModel.objects.filter(
        participant=author
    )
    exhibitions_for_author = []
    for exhibition in exhibitions:
        exhibitions_for_author.append(exhibition.exhibition.name)

    if exhibitions_for_author:
        return exhibitions_for_author
    return None


def get_data(category: str = None, year: float = None,
             dimensions: str = None, materials: str = None,
             author_name: str = None):
    """Получение данных о произведении"""
    exhibitions = get_author_data(author_name)
    artwork_data = ProcessingArtworkDataToEstimate(
        category=category, year=year, dimensions=dimensions,
        materials=materials, num_sold_artworks=None, num_artist_artworks=None,
        country=None, sex=None, personal_exhibitions=None,
        exhibitions=exhibitions, age=None, is_alive=None
    )
    return artwork_data.get_vector_to_estimate()


def estimation(data, model_path=MODEL_PATH):
    """Оценка произведения по полученным данным"""
    model = CatBoostRegressor()
    model.load_model(fname=model_path, format="json")
    return np.clip(model.predict(preprocess(data)), 1000, np.inf)


# print(get_author_data("Вася Пупкин"))
