import styled from 'styled-components'

export const Grid = styled.div`
  background-color: #aaaaaa;
  border-radius: 10px;
  display: grid;
  grid-template-rows: repeat(4, 120px);
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  margin: 40px auto;
  padding: 15px;
  width: 550px;
`

interface CellProps {
  value: number
}

function getColor(value: number): string {
  if (value === 2) return '#FFEB3B'
  if (value === 4) return '#CDDC39'
  if (value === 8) return '#8BC34A'
  if (value === 16) return '#4CAF50'
  if (value === 32) return '#009688'
  if (value === 64) return '#00BCD4'
  if (value === 128) return '#03A9F4'
  if (value === 256) return '#2196F3'
  if (value === 512) return '#3F51B5'
  if (value === 1024) return '#673AB7'
  if (value === 2048) return '#9C27B0'
  return '#ccc'
}

export const Cell = styled.div`
  align-items: center;
  background-color: ${(props: CellProps) => getColor(props.value)};
  border-radius: 5px;
  color: #555;
  display: flex;
  font-size: 60px;
  font-weight: 500;
  height: 120px;
  justify-content: center;
  user-select: none;
  width: 120px;
`
