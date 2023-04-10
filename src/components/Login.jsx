import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
  
  <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
<form >

<VStack alignItems={'stretch'} w={['full','96']} spacing={'8'} m={'auto'} my={"16"}>
    <Heading> Welcome Back </Heading>
            <Input placeholder='Email' type={'email'} required focusBorderColor={'purple.500'}/>
            <Input placeholder={'Password'} type={'password'} required focusBorderColor={'purple.500'}/>
          <Button  variant={'link'} alignSelf={'flex-end'}>
<Link to="\forgetpassword">Forgot Password</Link>
          </Button>

<Button colorScheme={'purple'} type={'submit'}>Log In </Button>


<Text textAlign={'right'}>New User? {' '}</Text>
<Button  variant={'link'} colorScheme={'purple'}>
<Link to="/signup">Signup </Link>
          </Button>

</VStack>

</form>
  </Container>
  )
}

export default Login
