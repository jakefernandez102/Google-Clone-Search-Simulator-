import {PageProps} from "@/App";
import LogoAndSearch from "@/components/molecules/LogoAndSearch";
import { Button, Center, Container, Text } from "@chakra-ui/react";
import { useState } from "react";

const GoogleSearch = ({onClick}:PageProps) => {
  const [search, setSearch] = useState("");

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value.toLowerCase());
  };

  const matches = ["nike", "nike jordan dunk", "nike sb"];
  const filteredSuggestions = matches.filter((match) => match.includes(search));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search === "") return;
    if (filteredSuggestions.length === 0) return;
    onClick();
  }

  return (
    <Center
      w={{
        base: "95%", // Default for all screens
        sm: "90%", // 480px and above
        md: "80%", // 768px and above
        lg: "70%", // 1024px and above
      }}
      h="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <LogoAndSearch
        search={search}
        onSubmit={handleSubmit}
        onInputChange={handleChangeSearch}
        searchSuggestions={filteredSuggestions}
        logoPosition={'centered'}
      />

      <Container mt={20} display="flex" justifyContent="center" alignItems="center" gap={10}>
        <Button>Find with Google</Button>
        <Button>I will be lucky</Button>
      </Container>
      <Text as="p" mt={20}>
        Google offered in: <Text as="a" color="blue.500">English</Text>
      </Text>
    </Center>
  );
};

export default GoogleSearch;
