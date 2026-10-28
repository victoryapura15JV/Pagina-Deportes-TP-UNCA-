from django.contrib import admin
from .models import ActividadDeportiva, Horario, Inscripcion


@admin.register(ActividadDeportiva)
class ActividadDeportivaAdmin(admin.ModelAdmin):
    # punto 4: list_display
    list_display = ('nombre', 'lugar', 'cupo')
    # punto 4: search_fields:
    search_fields = ('nombre', 'lugar')
    list_filter = ('lugar',)


@admin.register(Horario)
class HorarioAdmin(admin.ModelAdmin):
    list_display = ('actividad', 'dia', 'hora_inicio', 'hora_fin')
    list_filter = ('dia', 'actividad')
    search_fields = ('actividad__nombre', 'dia')


@admin.register(Inscripcion)
class InscripcionAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'apellido', 'dni', 'horario', 'fecha_inscripcion', 'estado')
    search_fields = ('nombre', 'apellido', 'dni')
    list_filter = ('estado', 'fecha_inscripcion')
