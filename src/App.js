import './App.css';
import Card from './componentes/Card';
import Footer from './componentes/Footer';
import Header from './componentes/Header';

function App() {
  return (
    <div className='body'>

      <Header titulo="Galería de Imágenes con
React"/>

      <Card
        titulo="Martin Pescador"
        imagen="https://www.rutaschile.com/configurador/Parques/Fauna_2832020153513.jpg" alt="Martin Pescador"
        descripcion="El Martín Pescador es un ave que habita principalmente desde la Octava Región hasta Tierra del Fuego y también es conocida bajo el nombre de Martín del Río. Su nombre científico es Alcedo Atthis y viene de la familia Alcedinidae"
      />

      <Card
        titulo="Mapache"
        imagen="https://curiodyssey.org/wp-content/uploads/2017/03/Mammals-Raccoon.jpg" alt="Mapache"
        descripcion="Tiene un tamaño mediano y puede llegar a medir entre 40 cm y 55 cm de alto. Es un poco mayor y más grueso que un gato, de pelo medianamente largo y de color gris plateado (más oscuro en el centro del lomo), el pelo de las extremidades casi blanco, cola larga y anillada (gris plateado con blanco o casi blanco) y una característica mancha de pelo negro que va desde cada mejilla a cada ojo, lo que lo hace muy reconocible, pues parece como si llevara un antifaz."
      />

      <Card
        titulo="Leopardo de las nieves"
        imagen="https://vanguardia.com.mx/binrepository/900x625/0c0/0d0/none/11604/EBAX/leopardo-de-las-nieves_VG3279958_MG2831219.jpg" alt="Leopardo de las nieves"
        descripcion="Viven en montañas remotas a altitudes de hasta 6000 m s. n. m., motivo por el cual es poco lo que se sabe de ellos. Su pelo es gris, suave y excepcionalmente denso, y tiene una cola también de longitud excepcional que enrolla alrededor del cuerpo para abrigarse.
Caza de día y ataca a todo tipo de animales salvajes, así como al ganado. Son a veces matados por granjeros, pero también cazados por su piel."
      />


      <Footer 
      
      />
    </div>
  );
}

export default App;
