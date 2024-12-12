import DoctorCard from "./DoctorCard"

export default function DoctorsGrid({doctors}){
    let doctores = doctors.map(function(doctor, key) {
        return <DoctorCard doctor={doctor} key={key}/>
      });
    return (
        <>
            <div className="grid grid-cols-4 gap-2">
                {doctores}
            </div>
        </>
    );
}