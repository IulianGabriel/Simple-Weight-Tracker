interface Weight {
  date: string;
  weight: number;
}

interface Data {
  weight: Weight[]; // 'weight' is an array of 'Weight' objects
}

// Interface for graph library
interface DataPoint {
  x: string;
  y: number;
}

interface DataSeries {
  id: string;
  color: string;
  data: DataPoint[];
}

const GRAPH_DATA = [
  {
    id: "Weight",
    color: "hsl(284, 70%, 50%)",
  },
];

export function parseBeData(data: Data): DataSeries[] {
  return GRAPH_DATA.map((weightData) => {
    const weights = data.weight;
    return {
      ...weightData,
      data: weights.map((weight: Weight) => ({
        x: weight.date,
        y: weight.weight,
      })),
    };
  });
}
