# E-Commers Centro Medico Veterinario

## Instalación:

Para poner en marcha esta aplicación se debe ejecutar el comando **_npm install_**

Una vez ejecutado ese comando se debe ejecutar el comando **_npm start_**

## Introducción:

Esta aplicación de E-Commers es una continuación de los proyectos realizados en los cursos anteriores de CODERHOUSE (Desarrollo Web y Javascript).
Si quiere ver estos proyectos haga Click [Aqui](http://claudio-coder.github.io/veterinaria-claudiocabanas/ "Aqui")

En esta aplicación se puede realizar la consulta de productos , los cuales estan separados según las razas, como ser:

- Perros
- Gatos
- Peces
- Aves
- Conejos
- Exóticos

Y en cada raza se pueden encontrar

- Alimentos
- Accesorios

### Ingreso a la aplicación

Cuando se ingresa a la aplicación se despliega la misma con un Navbar y todas la ventanas con los productos de todas las razas.

En el Navbar tenemos los siguientes opciones:

- **Inicio** : El mismo nos lleva a la pagina principal que es la misma que cuando se inicia la aplicación por primera vez.
- **Perros** : Nos lleva a la ventana de productos de la raza Perros
- **Gatos** : Nos lleva a la ventana de productos de la raza Gatos
- **Peces** : Nos lleva a la ventana de productos de la raza Peces
- **Aves** : Nos lleva a la ventana de productos de la raza Aves
- **Conejos** : Nos lleva a la ventana de productos de la raza Conejos
- **Exóticos** : Nos lleva a la ventana de productos de la raza Exóticos

Una vez que sabemos que producto queremos consultar/comprar debemos hacer click en ese producto.
En ese momento se despliega la venta con el producto seleccionado que trae los siguientes datos:

- [ ] **Imagen**
- [ ] **Nombre completo**
- [ ] **Precio**
- [ ] **Stock disponible**
- [ ] **Contador para seleccionar la cantidad deseada**
- [ ] **Descripción detallada**

### Como comprar el producto

Ya estando en la ventana del producto seleccionado y luego de determinar la cantidad de unidades a comprar. Se debe hacer click en el boton **_Subir al Carrito_**. Ahi se despliga otro boton que nos da la opción de **_Ir al Carrito_**.
Si en lugar de ir al carrito se desea seguir comprando , podemos hacer click en **_Inicio_** o seleccionar la raza que queremos consultar (Perros, Gatos, etc).

##### Consultando el Carrito

Si queremos consultar en cualquier momento lo seleccionado, podemos hacer click en el **Icono del Carrito** (extremo superior derecho).
Ahí se despliega en la pantalla todos los productos seleccionados con los siguientes datos de cada uno de ellos

- [x] Nombre
- [x] Cantidad
- [x] Precio unitario
- [x] SubTotal

Debajo de estos datos se tiene el **_Total _** de toda la compra y junto a este total esta un boton **_Finalizar Compra_**.

Al hacer click en ese botón se despliega una pantalla con los datos sugeridos para completar la compra, los mismos son:

- Nombre
- Telefono
- Email

Luego de completar estos datos y siendo los mismos correctos en cada uno de sus campos, se puede hacer click en el botón **_Comprar_**

Tras esta acción se devuelve un ID que identifica la compra realizada, y seguido a esto se invita a seguir comprando con el botón **_SEGUIR COMPRANDO_**

**E-Commers desarrollado por Claudio Cabanas**:
