const jobs = [
  {
    id: 1,
    title: 'Frontier Communications',
    category: 'IR Techs',
    location: 'Charlotte, NC',
  },
  {
    id: 2,
    title: 'Windstream',
    category: 'Fiber',
    location: 'Wappinger Falls, NY',
  },
  {
    id: 3,
    title: 'CenturyLink',
    category: 'Buried Service Wire',
    location: 'Orlando, FL',
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.json(jobs);
}