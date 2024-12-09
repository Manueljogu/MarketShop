import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RegistrarPage } from './registrar.page';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('RegistrarPage', () => {
  let component: RegistrarPage;
  let fixture: ComponentFixture<RegistrarPage>;
  let router: Router;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarPage],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarPage);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('deberia borrar los campos despues de registrarse', () => {
    // se establece los valores en los campos 
    component.nombre = 'John';
    component.apellido = 'Doe';
    component.email = 'john.doe@example.com';
    component.telefono = '123456789';
    component.genero = 'Male';
    component.direccion = '123 Main St';
    component.ciudad = 'Anytown';
    component.pais = 'Country';

    // llama al metodo registrar
    component.regitrar();

    // Después de llamar, los campos deben limpiarse
    expect(component.nombre).toBe('');
    expect(component.apellido).toBe('');
    expect(component.email).toBe('');
    expect(component.telefono).toBe('');
    expect(component.genero).toBe('');
    expect(component.direccion).toBe('');
    expect(component.ciudad).toBe('');
    expect(component.pais).toBe('');
  });

  it('deberia navegar a la pagina Perfil con los parametros correctos', () => {
    
    const navigateSpy = spyOn(router, 'navigate');

    // se establece los valores en los campos
    component.nombre = 'John';
    component.apellido = 'Doe';
    component.email = 'john.doe@example.com';
    component.telefono = '123456789';
    component.genero = 'Male';
    component.direccion = '123 Main St';
    component.ciudad = 'Anytown';
    component.pais = 'Country';

    // llama al metodo registrar
    component.regitrar();

    // Verifique el método de navegación con los parámetros correctos
    expect(navigateSpy).toHaveBeenCalledWith(['/perfil'], {
      state: {
        nombreEnviado: 'John',
        apellidoEnviado: 'Doe',
        emailEnviado: 'john.doe@example.com',
        telefonoEnviado: '123456789',
        generoEnviado: 'Male',
        direccionEnviado: '123 Main St',
        ciudadEnviado: 'Anytown',
        paisEnviado: 'Country'
      }
    });
  });
});
