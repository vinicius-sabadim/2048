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
  if (value === 2) return 'cornsilk'
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
