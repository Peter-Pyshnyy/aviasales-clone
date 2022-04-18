export const priceSort = (a, b) => {
  return a.price - b.price;
};

export const durationSort = async (a, b) => {
  const segmentA = await getSegments(a);
  const segmentB = await getSegments(b);

  let durationA = 0;
  segmentA.map((e) => (durationA += e.duration));

  let durationB = 0;
  segmentB.map((e) => (durationB += e.duration));

  return durationA - durationB;
};

export const optimalSort = async (a, b) => {
  const segmentA = await getSegments(a);
  const segmentB = await getSegments(b);

  let stopsA = 0;
  segmentA.map((e) => (stopsA += e.stops.length));

  let stopsB = 0;
  segmentB.map((e) => (stopsB += e.stops.length));

  return stopsA - stopsB;
};

const getSegments = async (ticket) => {
  let segments = [];
  let segmentsAmount = ticket.segments.length;
  const res = await fetch("json/segments.json");
  const data = await res.json();

  data.map((segment) => {
    let found = false;
    for (let i = 0; i < segmentsAmount; i++) {
      found = ticket.segments[i] == segment.id;

      if (found) segments.push(segment);
    }
  });
  return segments;
};
