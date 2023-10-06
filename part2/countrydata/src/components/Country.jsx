const Country = ({country}) => {
    const { common } = country.name
    const { capital, area, languages } = country
    const { png } = country.flags

    const langs = new Array(Object.values(languages))

    return (
    <div>
        <h1>{common}</h1>
        <p>Capital: {capital}</p>
        <p>Area: {area}</p>
        <p><strong>Languages spoken:</strong></p>
        <ul>
            {langs.map(lang => <li>{lang}</li>)}
        </ul>
        <img src={png} alt="flag" />
    </div>
    )

}

export default Country