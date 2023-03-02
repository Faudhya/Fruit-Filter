import "./App.css";
import { Fruits } from "./fruits";
import { Container, Input } from "@chakra-ui/react";
import { useState } from "react";

function App() {
    const [query, setQuery] = useState("");
    let fruits = Fruits;
    let fruitslist = fruits
        .filter((fruit) => fruit.name.toLowerCase().includes(query))
        .map((fruit) => {
            return (
                <li key={fruit.id} className="list-item">
                    {fruit.name}
                </li>
            );
        });
    return (
        <Container className="container" centerContent>
            <Input
                bgColor={"white"}
                borderColor={"black"}
                focusBorderColor="black"
                placeholder="Search"
                className="search-bar"
                onChange={(e) => setQuery(e.target.value)}
            />
            <ul className="list">{fruitslist}</ul>
        </Container>
    );
}

export default App;
