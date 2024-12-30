export default function ServiceList(props){
   
    return (
        <>
            <h1 className="mt-6 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Servicios</h1>
            <div className="grid grid-cols-4 gap-2 place-items-left ml-3">
                <ul>
                    {props.services.map(function(service, key) {
                        return <li key={key}>{service}</li>
                    })}
                </ul>
            </div>
        </>
    );
}