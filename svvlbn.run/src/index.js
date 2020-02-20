import { Scene, PointLayer } from '@antv/l7';
import { GaodeMap } from '@antv/l7-maps';

const scene = new Scene({
  id: 'map',
  map: new GaodeMap({
    center: [ 120.672367,27.976009 ],
    style: 'dark',
    pitch: 0,
    zoom: 11
  })
});

// fetch('https://gw.alipayobjects.com/os/rmsportal/BElVQFEFvpAKzddxFZxJ.txt')
fetch('https://gw.alipayobjects.com/os/rmsportal/BElVQFEFvpAKzddxFZxJ.txt')
  .then(res => res.text())
  .then(data => {
    const pointLayer = new PointLayer({})
      .source(data, {
        parser: {
          type: 'csv',
          y: 'lat',
          x: 'lng'
        }
      })
      .size(0.5)
      .color('#731900','#893007','#896207')
      .style({
        opacity: 1
      });

    scene.addLayer(pointLayer);
  });

