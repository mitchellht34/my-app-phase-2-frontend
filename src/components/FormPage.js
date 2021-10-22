import React, { useState } from 'react';

function FormPage({ reload, setReload }) {

    const [formData, setFormData] = useState({
        Title: "",
        Year: "",
        Type: "",
        Poster: "",
        Genre: "",
        Released: "",
        Runtime: "",
        Rated: "",
        Director: "",
        Writer: "",
        Actors: "",
        Awards: "",
        Plot: "",
        totalSeasons: "",
    })

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData);
        fetch("http://localhost:3000/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "Title": formData.Title,
                "Year": formData.Year,
                "Type": formData.Type,
                "Poster": formData.Poster,
                "Genre": formData.Genre,
                "Released": formData.Released,
                "Runtime": formData.Runtime,
                "Rated": formData.Rated,
                "Director": formData.Director,
                "Writer": formData.Writer,
                "Actors": formData.Actors,
                "Awards": formData.Awards,
                "Plot": formData.Plot,
                "totalSeasons": formData.totalSeasons,
            })
        })
        setFormData({
            Title: "",
            Year: "",
            Type: "",
            Poster: "",
            Genre: "",
            Released: "",
            Runtime: "",
            Rated: "",
            Director: "",
            Writer: "",
            Actors: "",
            Awards: "",
            Plot: "",
            totalSeasons: "",
        })
        setReload(!reload)
    }


    return (
        <div>
            <h3>Manually Submit an Entry</h3>
            <form onSubmit={handleSubmit}>
                <section>
                    <label>
                        Title:
                        <input
                            type="text"
                            name="Title"
                            value={formData.Title}
                            onChange={handleChange}
                        />
                    </label>
                </section>
                <section>
                    <label>
                        Year:
                        <input
                            type="text"
                            name="Year"
                            value={formData.Year}
                            onChange={handleChange}
                        />
                    </label>
                </section>
                <section>
                    <label>
                        Type:
                        <input
                            type="text"
                            name="Type"
                            value={formData.Type}
                            onChange={handleChange}
                        />
                    </label>
                </section>
                <section>
                    <label>
                        Poster:
                        <input
                            type="text"
                            name="Poster"
                            value={formData.Poster}
                            onChange={handleChange}
                        />
                    </label>
                </section>
                <section>
                    <label>
                        Genre:
                        <input
                            type="text"
                            name="Genre"
                            value={formData.Genre}
                            onChange={handleChange}
                        />
                    </label>
                </section>
                <section>
                    <label>
                        Released:
                        <input
                            type="text"
                            name="Released"
                            value={formData.Released}
                            onChange={handleChange}
                        />
                    </label>
                </section>
                <section>
                    <label>
                        Runtime:
                        <input
                            type="text"
                            name="Runtime"
                            value={formData.Runtime}
                            onChange={handleChange}
                        />
                    </label>
                </section>
                <section>
                    <label>
                        Rated:
                        <input
                            type="text"
                            name="Rated"
                            value={formData.Rated}
                            onChange={handleChange}
                        />
                    </label>
                </section>
                <section>
                    <label>
                        Director:
                        <input
                            type="text"
                            name="Director"
                            value={formData.Director}
                            onChange={handleChange}
                        />
                    </label>
                </section>
                <section>
                    <label>
                        Writer:
                        <input
                            type="text"
                            name="Writer"
                            value={formData.Writer}
                            onChange={handleChange}
                        />
                    </label>
                </section>
                <section>
                    <label>
                        Actors:
                        <input
                            type="text"
                            name="Actors"
                            value={formData.Actors}
                            onChange={handleChange}
                        />
                    </label>
                </section>
                <section>
                    <label>
                        Awards:
                        <input
                            type="text"
                            name="Awards"
                            value={formData.Awards}
                            onChange={handleChange}
                        />
                    </label>
                </section>
                <section>
                    <label>
                        Plot:
                        <input
                            type="text"
                            name="Plot"
                            value={formData.Plot}
                            onChange={handleChange}
                        />
                    </label>
                </section>
                <section>
                    <label>
                        Total Seasons:
                        <input
                            type="text"
                            name="totalSeasons"
                            value={formData.totalSeasons}
                            onChange={handleChange}
                        />
                    </label>
                </section>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormPage