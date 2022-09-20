// import React from "react";
import { authReducer, logout } from "./slice";
import { authState } from "./types";

let state: authState

test('auth data shoulb be null', () => {

  //set data
  state =
  {
    data: {
      _id: '63248bca7240a988c209f7e7',
      fullName: '12345',
      email: '12345@mail.ru',
      passwordHash: '$2b$10$UHMZxhkDdiRKAX1t7mwtlO9Hphbgyv3pXkveztHD.nU1NPudRIryy',
      createdAt: '2022-09-16T14:44:26.676Z',
      updatedAt: '2022-09-16T14:44:26.676Z',
      __v: 0
    },
    status: 'success'
  }

  // action 
  let newState = authReducer(state, logout())

  // expectation
  expect(newState.data).toBeNull()
})