from django.db import models


class ActividadDeportiva(models.Model):
    nombre = models.CharField(max_length=100, unique=True)
    descripcion = models.TextField(blank=True, null=True)
    lugar = models.CharField(max_length=100)
    cupo = models.IntegerField()
    imagen = models.ImageField(upload_to='actividades/', null=True, blank=True)

    def __str__(self):
        return self.nombre

class Horario (models.Model):
    actividad = models.ForeignKey(ActividadDeportiva, on_delete=models.CASCADE)
    dia = models.CharField(max_length=30)
    hora_inicio = models.TimeField()
    hora_fin = models.TimeField()

    def __str__ (self):
        return f"{self.actividad.nombre} - {self.dia} ({self.hora_inicio} a {self.hora_fin})"

class Inscripcion (models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    dni = models.IntegerField()
    fecha_inscripcion = models.DateField(auto_now_add=True)
    estado = models.CharField(max_length=20)
    horario = models.ForeignKey(Horario, on_delete=models.CASCADE)

    def __str__ (self):
        return f"{self.nombre} - {self.apellido} - {self.dni} - {self.fecha_inscripcion} - {self.estado} - {self.horario}"
