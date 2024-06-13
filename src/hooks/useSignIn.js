import { useState, useEffect } from 'react';
import { AUTH } from '../graphql/mutations'
import { useMutation } from '@apollo/client'

const useSignIn = () => {
    const [mutate, result] = useMutation(AUTH);

    const signIn = async ({ username, password }) => {
        return await mutate({variables: {username, password}})
    };

    return [signIn, result];
};

export default useSignIn