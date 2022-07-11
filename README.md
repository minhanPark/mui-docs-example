# mui docs 따라하며 정리

## 설치하기

```bash
npm install @mui/material @emotion/react @emotion/styled
```

위와 같은 명령어로 설치할 수 있다.  
mui5 부터는 기본적으로 css를 emotion을 통해서 하고 있다.

## Typography

Typography는 텍스트 컨텐츠 등을 보여줄 때 사용되는 컴포넌트이다.  
mui는 variants(변종)라는 속성을 통해서 다양한 변종을 만들어 내는데 typography는 태그를 지정할 수 있다.

```jsx
<>
  <Typography variant="h1">h1 heading</Typography>
  <Typography variant="h4" component="h1" gutterBottom>
    h4 heading
  </Typography>
  <Typography variant="subtitle1">subtitle 1</Typography>
  <Typography variant="body1">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit earum hic
    consequatur recusandae repudiandae culpa, aliquam alias doloremque sint,
    repellendus aperiam nemo, sequi rerum optio. Ab eos ad eaque ea!
  </Typography>
</>
```

variant의 값을 보고 태그가 결정되는데, component 속성을 통해서 디자인은 똑같되 태그를 바꿀 수 있다.

> variant h1의 디자인을 쓰고 싶은데 시맨틱 태그 상 다른 태그를 사용해야할 때 component 속성을 통해서 태그를 바꿀 수 있다.

## 아이콘 사용하기

```bash
npm install @mui/icons-material
```

설치를 하자.

[검색하러 가기](https://mui.com/material-ui/material-icons/)  
사용할 수 있는 아이콘들은 공식 문서에서 확인할 수 있다. 여기서 검색해서 사용하면 된다.

## Button

가장 많이 쓰는 버튼 컴포넌트는 기본적인 variant는 text | contained | outlined 가 있다.

```jsx
<>
  <Button variant="text">Text</Button>
  <Button variant="contained" href="https://google.com">
    Contained
  </Button>
  <Button variant="outlined">Outlined</Button>
</>
```

기본적으로 button 태그가 사용되지만 href 속성을 주면 a 태그로 변경된다.

```jsx
<Button variant="contained" size="small" color="warning">
  Small Warning
</Button>
```

**size는 small | medium | large를 값으로 가지고, color는 primary | secondary | success | error | info | warning 등의 값**을 가진다.  
만약 색을 바꾸려고 한다면 테마의 색을 변경해야한다.

```jsx
<>
  <Button variant="contained" startIcon={<SendIcon />} disableRipple>
    Send
  </Button>
  <Button variant="contained" endIcon={<SendIcon />} disableElevation>
    Send
  </Button>
  <IconButton aria-label="send" color="success" size="medium">
    <SendIcon />
  </IconButton>
</>
```

startIcon과 endIcon을 통해서 아이콘을 텍스트의 앞 또는 뒤에 삽입할 수 있다.  
disableRipple을 통해서 눌렀을 때 물결효과, disableElevation을 통해서 버튼의 높이(해발)를 없앨 수 있다.  
만약 텍스트 없이 아이콘만 사용하려고 한다면 IconButton를 가져와서 사용하면 된다.

## Button Group

버튼 그룹으로 버튼을 묶어서 공통된 속성을 줄 수 있다.  
또한 묶인 버튼은 그룹답게 css 효과를 주어서 구분이 된다.

```jsx
<ButtonGroup variant="contained">
  <Button>Left</Button>
  <Button>Center</Button>
  <Button>Right</Button>
</ButtonGroup>
```

위처럼 주면 버튼 3개다 variant가 contained로 전달될 것이다.

## ToggleButtonGroup | ToggleButton

토글 버튼을 통해서 토글 기능을 만들 수 있음.

```tsx
export const ToggleButton = () => {
  const [formats, setFormats] = useState<string | null>(null);
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatesFormats: string | null
  ) => {
    setFormats(updatesFormats);
  };
  return (
    <ToggleButtonGroup
      aria-label="text formatting"
      value={formats}
      onChange={handleFormatChange}
      color="primary"
      exclusive
    >
      <ToggleButton value="bold" aria-label="bold">
        <FormatBoldIcon />
      </ToggleButton>
      <ToggleButton value="italic" aria-label="italic">
        <FormatItalicIcon />
      </ToggleButton>
      <ToggleButton value="underlined" aria-label="underlined">
        <FormatUnderlinedIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
```

ToggleButtonGroup에 value와 exclusive를 전달해서 하나의 값만 선택하도록 할 수 있다.  
또한 color 값을 정해주면 선택된 값이 해당 색상이 되는 것을 알 수 있음.  
onChange에 넣어주면 해당 값이 전달(두번째 매개변수)되기 때문에 state 값이 변경된다.

만약 여러개를 선택하도록 하고 싶다면 exclusive를 지우고 state가 배열을 받을 수 있도록 해주면 된다.

```tsx
const [formats, setFormats] = useState<string[]>([]);
const handleFormatChange = (
  _event: React.MouseEvent<HTMLElement>,
  updatesFormats: string[]
) => {
  console.log(updatesFormats);
  setFormats(updatesFormats);
};
```

## TextField

input 창을 만들 때 사용하는 컴포넌트  
기본적으로는 label과 variant 만으로 깔끔하게 만들어 진다.

```tsx
<>
  <TextField label="Name" variant="filled" required helperText="헬퍼 텍스트" />
</>
```

required 속성을 통해서 별표를 붙일 수 있고, helperText 속성을 통해서 인풋 창 밑에 텍스트를 표시할 수 있음(텍스트가 길어지면 인풋창도 같이 길어지는 것을 확인함)  
장식(Adornment)을 넣을 수 있음

```tsx
<Stack direction="row" spacing={2}>
  <TextField
    label="Amount"
    InputProps={{
      startAdornment: <InputAdornment position="start">$</InputAdornment>,
    }}
  />
  <TextField
    label="Weight"
    InputProps={{
      endAdornment: <InputAdornment position="end">kg</InputAdornment>,
    }}
  />
</Stack>
```

위와 같이 입력창의 앞 뒤에 장식을 넣어서 꾸밀 수 있다. 텍스트 대신 아이콘을 넣어서 사용할 수도 있음.  
InputProps을 통해서 input 창에 넣어야하는 속성들을 넣을수도 있다.

```tsx
<TextField label="Read only" InputProps={{ readOnly: true }} />
```

```jsx
<TextField
  label="Form Input"
  required
  value={value}
  onChange={(e) => setValue(e.target.value)}
  error={!value}
  helperText={!value ? "Required" : "Do not shared your password with anyone"}
/>
```

기본적으로 리액트에서 input 창을 다루는 방식 그대로 사용하는데 react hook form 을 사용하는 방법은 더 찾아봐야할 것 같다.
