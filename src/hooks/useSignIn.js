import { useState, useEffect } from 'react';
import { LOGIN } from '../graphql/queries'
import { useMutation } from '@apollo/client'

const useSignIn = () => {
    const [mutate, result] = useMutation(LOGIN);

    const signIn = async ({ username, password }) => {
        return await mutate({variables: {username, password}})
    };

    return [signIn, result];
};

export default useSignIn