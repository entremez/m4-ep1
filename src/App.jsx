import Head from "./components/Header"
import Footer from "./components/Footer"
import DoctorsGrid from "./components/DoctorsGrid"

function App() {

  const doctors = [{
    "id": 1,
    "name" : "Dr. José Schmidt",
    "specialty" : "Cardiología",
    "description": "Con más de 15 años de experiencia, el Dr. Schmidt, se especializa en diagnóstico y tratamiento de enfermedades cardiovasculares, enfocándose en prevención y bienestar cardíaco integral.",
    "image": "dr1.png",
    "years_of_experience": 18,
    "disponibility": {
      "days": ["Lunes", "Miércoles", "Viernes"],
      "hours": ["8:00", "10:00", "14:00"]
    }
  },
  {
    "id": 2,
    "name": "Dra. María Catalina López",
    "specialty": "Ginecología y Obstetricia",
    "description": "Experta en salud femenina, la Dra. López acompaña a sus pacientes en todas las etapas de la vida, brindando atención en control prenatal y salud reproductiva.",
    "image": "dr2.png",
    "years_of_experience": 11,
    "disponibility": {
      "days": ["Martes", "Jueves"],
      "hours": ["9:00", "11:00", "15:00"]
    }},
    {
      "id": 2,
      "name": "Dra. María Catalina López",
      "specialty": "Ginecología y Obstetricia",
      "description": "Experta en salud femenina, la Dra. López acompaña a sus pacientes en todas las etapas de la vida, brindando atención en control prenatal y salud reproductiva.",
      "image": "dr2.png",
      "years_of_experience": 11,
      "disponibility": {
        "days": ["Martes", "Jueves"],
        "hours": ["9:00", "11:00", "15:00"]
      }
  },
  {
    "id": 3,
    "name": "Dra. María Catalina López",
    "specialty": "Ginecología y Obstetricia",
    "description": "Experta en salud femenina, la Dra. López acompaña a sus pacientes en todas las etapas de la vida, brindando atención en control prenatal y salud reproductiva.",
    "image": "dr2.png",
    "years_of_experience": 11,
    "disponibility": {
      "days": ["Martes", "Jueves"],
      "hours": ["9:00", "11:00", "15:00"]
    }
},
{
  "id": 4,
  "name": "Dra. María Catalina López",
  "specialty": "Ginecología y Obstetricia",
  "description": "Experta en salud femenina, la Dra. López acompaña a sus pacientes en todas las etapas de la vida, brindando atención en control prenatal y salud reproductiva.",
  "image": "dr2.png",
  "years_of_experience": 11,
  "disponibility": {
    "days": ["Martes", "Jueves"],
    "hours": ["9:00", "11:00", "15:00"]
  }
}];
  return (
    <>
      <Head />
        <DoctorsGrid doctors={doctors} />
      <Footer />
    </>
  )
}

export default App
