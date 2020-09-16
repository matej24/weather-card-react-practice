import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Location = ({ city, country, getWeather }) => {
  const [query, setQuery] = useState('');
  const [inputMode, setinputMode] = useState(true);
  const inputRef = useRef('');

  useEffect(() => {
    if (inputMode) {
      inputRef.current.focus();
    }
  }, [inputMode]);

  if (inputMode) {
    return (
      <Container>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <FormElement
            onSubmit={(e) => {
              e.preventDefault();
              getWeather(query);
            }}
          >
            <InputField
              ref={inputRef}
              required
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <SearchButton type='submit'>Search</SearchButton>
            <CancelButton onClick={() => setinputMode(false)}>X</CancelButton>
          </FormElement>
        </motion.div>
      </Container>
    );
  }

  return (
    <Container>
      <City onClick={() => setinputMode(true)}>{city}</City>
      <Country>{country}</Country>
    </Container>
  );
};

export default Location;

const Container = styled.div`
  text-align: center;
`;
const City = styled.h1`
  font-family: 'Merriweather', sans-serif;
  font-size: 1.6em;
  position: relative;
  cursor: pointer;
  &:hover {
    top: -5px;
  }
`;

const Country = styled.h3`
  font-family: 'Fira Sans', sans-serif;
  font-size: 1.1rem;
`;

const FormElement = styled.form`
  display: flex;
  position: relative;
  background: #46618b;
  border-radius: 5px;
`;

const InputField = styled.input`
  padding: 5px;
  width: 80px;
  background: transparent;
  border: none;
  color: white;
  &:focus {
    outline: 0;
  }
`;

const SearchButton = styled.button`
  padding: 5px;
  background: #394e70;
  border: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  color: white;
  cursor: pointer;
`;

const CancelButton = styled.span`
  font-size: 0.8rem;
  position: absolute;
  background: #557fc2;
  top: -8px;
  right: -10px;
  cursor: pointer;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 0px 2px rgba(0, 0, 0, 0.4);
`;
