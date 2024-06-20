import { Images } from '../assets/ImageProperties';
import { HighlightListModel, SpotModel } from '../models';
import {Labels} from './constant';

export const categroyList: string[] = [
  Labels.ADVENTURE,
  Labels.CULINARY,
  Labels.ECO_TOURISM,
  Labels.FAMILY,
  Labels.SPORT,
];

export const highlightList : HighlightListModel[] = [
  {
    name: Labels.SURFING,
    banner: Images.surfingBanner,
    description: Labels.SURF_DESC
  },
  {
    name: Labels.HULA,
    banner: Images.hulaBanner,
    description: Labels.HULA_DESC
  },
  {
    name: Labels.VULCANOES,
    banner: Images.vulcanoBanner,
    description: Labels.VUL_DESC
  }
];

export const topSpotList : SpotModel[] = [
  {
    id: 1,
    name: "Maui",
    banner: Images.mauiBanner
  },
  {
    id: 2,
    name: "Kauai",
    banner: Images.kauaiBanner
  },
  {
    id: 3,
    name: "Honolulu",
    banner: Images.honoBanner
  }
]
