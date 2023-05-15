export type PropsCode = {
    code: CodeType
}

export type PropsForm = {
    code: CodeType,
    set: React.Dispatch<React.SetStateAction<CodeType>>
}

export type CodeType = {
    backgroundColor: string,
    foregroundColor: string,
    qrcode: {
        value: string,
        includeMargin: boolean,
        size: number,
        level: string,
        imageSettings: {
        src: string,
        x: undefined,
        y: undefined,
        height: number,
        width: number,
        excavate: boolean
        }
    },
    barcode: {
    value: string,
      width: number,
      height: number,
      format: "CODE128" | "CODE39" | "EAN13" | "ITF14" | "MSI" | "pharmacode" | "codabar" | "upc" | undefined,
      fontOptions: string,
      font: string,
      fontSize: number,
      textAlign: string,
      textPosition: string,
      textMargin: number,
      displayValue: boolean,
      margin: number,
      marginTop: number | undefined,
      marginRight: number | undefined,
      marginBottom: number | undefined,
      marginLeft: number | undefined
    }
  }

export type ImageSettings = {
    src: string,
    x: undefined,
    y: undefined,
    height: number,
    width: number,
    excavate: boolean
}

export type QrCodeType = {
    value: string,
    includeMargin: boolean,
    size: number,
    level: string,
    imageSettings: ImageSettings
}

export type BarCodeType = {
    value: string,
    width: number,
    height: number,
    format: "CODE128" | "CODE39" | "EAN13" | "ITF14" | "MSI" | "pharmacode" | "codabar" | "upc" | undefined,
    fontOptions: string,
    font: string,
    fontSize: number,
    textAlign: string,
    textPosition: string,
    textMargin: number,
    displayValue: boolean,
    margin: number,
    marginTop: number | undefined,
    marginRight: number | undefined,
    marginBottom: number | undefined,
    marginLeft: number | undefined
}