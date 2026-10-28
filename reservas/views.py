from django.shortcuts import render, get_object_or_404, redirect
from django.contrib import messages
from django.contrib.auth.decorators import permission_required  # Importación de seguridad
from .models import ActividadDeportiva
from .forms import ActividadDeportivaForm


def lista_actividades(request):
    actividades = ActividadDeportiva.objects.all()
    return render(request, 'reservas/lista_actividades.html', {'actividades': actividades})


# Restringe el acceso: solo usuarios logueados con permiso de añadir pueden usar esta vista
@permission_required('reservas.add_actividaddeportiva', login_url='/admin/login/')
def agregar_actividad(request):
    if request.method == 'POST':
        form = ActividadDeportivaForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, '¡La actividad deportiva se registró correctamente!')
            return redirect('reservas:lista_actividades')
    else:
        form = ActividadDeportivaForm()

    return render(request, 'reservas/agregar_actividad.html', {'form': form})


def detalle_actividad(request, id):
    actividad = get_object_or_404(ActividadDeportiva, id=id)
    return render(request, 'reservas/detalle_actividad.html', {'actividad': actividad})