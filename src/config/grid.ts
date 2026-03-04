import { CompactType, DisplayGrid, GridsterConfig, GridType } from "angular-gridster2";

export const gridOptions: GridsterConfig = {
  gridType: GridType.Fit,
  minCols: 4,
  minRows: 4,
  displayGrid: DisplayGrid.None,
  compactType: CompactType.CompactLeftAndUp,
  resizable: {
    delayStart: 0,
    enabled: true,
    handles: {
      s: true,
      e: true,
      n: true,
      w: true,
      se: true,
      ne: true,
      sw: true,
      nw: true
    }
  }
};