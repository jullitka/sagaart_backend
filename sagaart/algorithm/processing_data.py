import numpy as np


class ProcessingArtworkDataToEstimate:
    """Обработка данных, введенных пользователем и преобразование
    в удобный для запуска алгоритма оценки формат"""
    def __init__(
        self,
        category: str = None,
        year: float = None,
        dimensions: str = None,
        materials: str = None,
        num_sold_artworks: int = None,
        num_artist_artworks: int = None,
        country: str = None,
        sex: str = None,
        personal_exhibitions: list = None,
        exhibitions: list = None,
        age: int = None,
        is_alive: bool = None
    ):
        self.category = category
        self.year = year
        self.height = self.get_height(dimensions)
        self.width = self.get_width(dimensions)
        self.work_material = self.get_work_material(materials)
        self.pad_material = self.get_pad_material(materials)
        self.num_sold_artworks = num_sold_artworks
        self.num_artist_artworks = num_artist_artworks
        self.country = country
        self.sex = sex
        self.personal_exhibitions = self.get_personal_exhibitions(
            personal_exhibitions
        )
        self.exhibitions = self.get_exhibitions(exhibitions)
        self.age = age
        self.is_alive = is_alive

    def separation_dimensions(self, dimensions):
        """Разделение параметров картины на ширину и высоту.
        Учитывается любой разделитель между числами при условии,
        что в строке всего два числа"""
        if not dimensions:
            return None
        width_and_height = []
        dimension = ''
        for char in dimensions:
            if char.isdigit():
                dimension += char
            else:
                if len(width_and_height) == 0:
                    width_and_height.append(dimension)
                dimension = ''
        width_and_height.append(dimension)
        return width_and_height

    def separation_materials(self, materials):
        """Разделение материалов произведения.
        Учитывается в качестве разделителя запятую и запятую с пробелом"""
        if not materials:
            return None
        return [material.strip() for material in materials.split(',')]

    def get_width(self, dimensions):
        """Получение ширины произведения"""
        if dimensions:
            return float(self.separation_dimensions(dimensions)[0])
        return None

    def get_height(self, dimensions):
        """Получение высоты произведения"""
        if dimensions:
            return float(self.separation_dimensions(dimensions)[1])
        return None

    def get_work_material(self, materials):
        """Получение материала, которым написано произведения"""
        if materials:
            return self.separation_materials(materials)[1]
        return None

    def get_pad_material(self, materials):
        """Получение материала, на котором написано произведения"""
        if materials:
            return self.separation_materials(materials)[0]
        return None

    def get_personal_exhibitions(self, personal_exhibitions):
        """Получение из списка персональных выставок строки."""
        if personal_exhibitions:
            return ','.join(personal_exhibitions)
        return None

    def get_exhibitions(self, exhibitions):
        """Получение из списка групповых выставок строки."""
        if exhibitions:
            return ','.join(exhibitions)
        return None

    def get_vector_to_estimate(self):
        return [
            np.NaN if not self.category else self.category,
            np.NaN if not self.year else self.year,
            np.NaN if not self.height else self.height,
            np.NaN if not self.width else self.width,
            np.NaN if not self.work_material else self.work_material,
            np.NaN if not self.pad_material else self.pad_material,
            np.NaN if not self.num_sold_artworks else self.num_sold_artworks,
            np.NaN if not self.num_sold_artworks else self.num_sold_artworks,
            np.NaN if not self.country else self.country,
            np.NaN if not self.sex else self.sex,
            np.NaN if not self.personal_exhibitions else self.personal_exhibitions,
            np.NaN if not self.exhibitions else self.exhibitions,
            np.NaN if not self.age else self.age,
            np.NaN if not self.is_alive else self.is_alive,
        ]
