import React from 'react'
import styled from 'styled-components'
import { darken, lighten, readableColor } from 'polished'
import { theme } from '../styles/theme'

export const Title = styled.h1`
  color: ${theme.title};
  font-size: 64px;
  line-height: 77px;
  padding-bottom: 28px;
  text-align: center;
`

export const SubTitle = styled.span`
  color: ${theme.subTitle};
  font-size: 18px;
  line-height: 32px;
  padding-bottom: 28px;
`

export const Button = styled.div`
  align-items: center;
  background-color: ${({ color = theme.color.blue }) => color};
  border-radius: 2px;
  box-shadow: rgba(50, 50, 93, 0.11) 0px 2px 4px,
    rgba(0, 0, 0, 0.08) 0px 1px 2px;
  color: ${({ color = theme.color.blue }) => readableColor(color)};
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 2;
  padding: 6px 24px;
  text-transform: uppercase;
  transition: 200ms ease all;
  &:hover {
    background-color: ${({ color = theme.color.blue }) => lighten(0.15, color)};
  }
`

export const Container = styled.div`
  background-color: ${darken(0.02, theme.canvas.light)};
  border-radius: 2px;
  box-shadow: rgba(50, 50, 93, 0.11) 0px 2px 4px,
    rgba(0, 0, 0, 0.08) 0px 1px 2px;
  padding: 6px;
`
