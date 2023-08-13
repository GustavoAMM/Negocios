import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Outlet, useNavigate } from 'react-router-dom';
import { Input, Button, FormControl, FormLabel, VStack, Alert, AlertIcon } from '@chakra-ui/react';
import { Dashboard } from './Dashboard';

export function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [loginSuccess, setLoginSuccess] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          setLoginSuccess(true);
          navigate('/dashboard');
        } else {
          setLoginSuccess(false);
          setTimeout(() => {
            setLoginSuccess(null);
          }, 1500);
        }
      } else {
        setLoginSuccess(false);
        setTimeout(() => {
          setLoginSuccess(null);
        }, 1500);
      }
    } catch (error) {
      setLoginSuccess(false);
      setTimeout(() => {
        setLoginSuccess(null);
      }, 1500);
    }
  };

  return (
    <div className="flex justify-center items-center h-[500px]">
      <div className="border rounded-lg p-6">
        <VStack spacing={4} align="center">
          <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button colorScheme="blue" onClick={handleLogin}>
            Log In
          </Button>
          {loginSuccess === false && loginSuccess !== null && (
            <Alert status="error" mt={4}>
              <AlertIcon />
              Invalid email or password.
            </Alert>
          )}
        </VStack>
      </div>
    </div>
  );
}
