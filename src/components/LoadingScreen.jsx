import React, { useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useTheme } from '../contexts/ThemeContext';

const typeAndDelete = keyframes`
  0%,
  10% {
    width: 0;
  }
  45%,
  55% {
    width: 8.7em; /* Disesuaikan untuk teks "Initializing..." */
  }
  90%,
  100% {
    width: 0;
  }
`;

const blinkCursor = keyframes`
  50% {
    border-right-color: transparent;
  }
`;

const LoaderWrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ themeMode }) => themeMode === 'dark' ? '#1a1a1a' : '#f9f9f9'};
`;

const TerminalLoader = styled.div`
  border: 0.1em solid ${({ themeMode }) => themeMode === 'dark' ? '#333' : '#ccc'};
  background-color: ${({ themeMode }) => themeMode === 'dark' ? '#1a1a1a' : '#fff'};
  color: ${({ themeMode }) => themeMode === 'dark' ? '#c084fc' : '#6b21a8'}; /* purple for dark, darker purple for light */
  font-family: "Courier New", Courier, monospace;
  font-size: 1em;
  padding: 1.5em 1em;
  width: 12em;
  box-shadow: ${({ themeMode }) => themeMode === 'dark' ? '0 4px 8px rgba(0, 0, 0, 0.2)' : '0 4px 8px rgba(107, 33, 168, 0.2)'};
  border-radius: 4px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
`;

const TerminalHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1.5em;
  background-color: ${({ themeMode }) => themeMode === 'dark' ? '#333' : '#ddd'};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  padding: 0 0.4em;
  box-sizing: border-box;
`;

const TerminalControls = styled.div`
  float: right;
`;

const Control = styled.div`
  display: inline-block;
  width: 0.6em;
  height: 0.6em;
  margin-left: 0.4em;
  border-radius: 50%;
  background-color: ${({ themeMode }) => themeMode === 'dark' ? '#777' : '#999'};

  &.close {
    background-color: #e33;
  }
  &.minimize {
    background-color: #ee0;
  }
  &.maximize {
    background-color: #0b0;
  }
`;

const TerminalTitle = styled.div`
  float: left;
  line-height: 1.5em;
  color: ${({ themeMode }) => themeMode === 'dark' ? '#eee' : '#333'};
`;

const Text = styled.div`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  border-right: 0.2em solid ${({ themeMode }) => themeMode === 'dark' ? '#c084fc' : '#6b21a8'};
  animation:
    ${typeAndDelete} 6s steps(15) infinite,
    ${blinkCursor} 0.5s step-end infinite alternate;
  margin-top: 1.5em;
`;

export const LoadingScreen = ({ onComplete }) => {
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 6000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <LoaderWrapper themeMode={theme}>
      <TerminalLoader themeMode={theme}>
        <TerminalHeader themeMode={theme}>
          <TerminalTitle themeMode={theme}>Status</TerminalTitle>
          <TerminalControls>
            <Control className="close" themeMode={theme} />
            <Control className="minimize" themeMode={theme} />
            <Control className="maximize" themeMode={theme} />
          </TerminalControls>
        </TerminalHeader>
        <Text themeMode={theme}>Initializing...</Text>
      </TerminalLoader>
    </LoaderWrapper>
  );
};
