import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8000/api/v1/ebook",
    timeout: 8000,
    headers: {
        Accept: "application/json",
        Authorization: `Bearer sk_test_51MXML1DPnJxuKR02oC9YuT7c4sFXnWQuMvxJIytkKPb7ClGUaOL8x5UILhWteeeA4Rue4ttMAQlEQqmLK44id0Uc00gOS1OIkH`,
    },
});
