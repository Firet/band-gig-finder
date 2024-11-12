import axios from 'axios';

export default function fetch() {
    const url = 'https://jsonpleacehttps://jsonplaceholder.typicode.com/posts'
    const fakeData = {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    };

    return axios.post(url, fakeData)
        .then(() => console.info("Hook sent correctlyu"))
        .catch(() => console.warn("Hook failed"))
}