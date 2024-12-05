import { SetCls } from './set_class';
export type TStations = { [key: string]: SetCls<string> };
// You pass an array in, and it gets converted to a set.
const statesNeeded = new SetCls<string>(['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az']);

const stations: TStations = {};

stations['kone'] = new SetCls<string>(['id', 'nv', 'ut']);
stations['ktwo'] = new SetCls<string>(['wa', 'id', 'mt']);
stations['kthree'] = new SetCls<string>(['or', 'nv', 'ca']);
stations['kfour'] = new SetCls<string>(['nv', 'ut']);
stations['kfive'] = new SetCls<string>(['ca', 'az']);

setCovering(statesNeeded, stations);

export function setCovering(states: SetCls<string>, stations: TStations) {
  const finalStations = new SetCls<string>();
  // while states needed is not Empty
  while (!states.isEmpty()) {
    let bestStation: string;
    let stateCovered = new SetCls<string>();

    for (const station of Object.keys(stations)) {
      const covered = states.intersection(stations[station]);

      if (covered.size() > stateCovered.size() && !finalStations.has(station)) {
        bestStation = station;
        stateCovered = covered;
      }
    }

    if (!!bestStation) {
      states = states.difference(stateCovered);
      finalStations.add(bestStation);
      delete stations[bestStation];
    } else {
      return null;
    }
  }

  console.log(finalStations.values());

  return finalStations;
}
