import { CanDeactivateFn } from '@angular/router';
import { AdoptionFormComponent } from '../../pages/adoption-form/adoption-form.component';

export const exitFormGuard: CanDeactivateFn<AdoptionFormComponent> = (component) => {
  if (!component.adoptionForm?.dirty) { return true; }
  return window.confirm('¿Estás seguro de que quieres salir? Los cambios no guardados se perderán.');
};