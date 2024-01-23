interface MeteoStation {
    station_id: number
    name: string
    location: string
    opendate: string
    description: string
    status: boolean
    image_url: string | null
}

interface MeteoStationResult {
    resultCount: number
    results: MeteoStation[]
}

const getStationById = async (id = 1): Promise<MeteoStationResult> => {
    return fetch(`http://localhost:8000/stations/${id}`)
        .then((response) => response.json())
        .catch(() => ({ resultCount: 0, results: [] }))
}