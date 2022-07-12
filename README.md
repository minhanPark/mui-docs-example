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

## Select

select 태그 형태를 구현하려면 TextField, MenuItem이 필요하다.

```jsx
<TextField
  label="Select country"
  select
  value={country}
  onChange={handleChanage}
  fullWidth
  SelectProps={{
    multiple: true,
  }}
>
  <MenuItem value="IN">India</MenuItem>
  <MenuItem value="US">USA</MenuItem>
  <MenuItem value="AU">Austraila</MenuItem>
</TextField>
```

SelectProps에 multiple값을 true로 하면 다중 선택이 가능해진다. 그래서 onChange에 값으로 배열을 받게된다. 해당 속성을 제거하면 선택된 값의 value를 받게된다.

## Radio

```jsx
<FormControl>
  <FormLabel id="job-exp-group-label">Year of exp</FormLabel>
  <RadioGroup
    name="job-exp-group"
    aria-labelledby="job-exp-group-label"
    value={value}
    onChange={handleChange}
    row
  >
    <FormControlLabel
      control={<Radio size="medium" color="secondary" />}
      label="0-2"
      value="0-2"
    />
    <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
    <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
  </RadioGroup>
  <FormHelperText>Someting :</FormHelperText>
</FormControl>
```

radio 태그는 위와 같은 형태로 쓴다.  
RadioGroup에 value와 onChange로 값을 컨트롤 할 수 있고, row 속성을 통해 가로 배치할 수 있다.  
FormControlLabel에 라디오 태그를 주고, 라벨과 value 값을 주면 된다.

## Checkbox

체크박스도 FormControlLabel에 label과 Checkbox를 전달해서 사용하면 된다.

```jsx
<FormControlLabel
  label="I accept terms and conditions"
  control={<Checkbox checked={acceptTnC} onChange={handleChange} />}
/>
```

아이콘을 변경해서 사용할 수도 있는데 이때는 icon과 checkedIcon 속성에 아이콘을 전달해주면 된다.

```jsx
<Checkbox
  icon={<BookmarkBorderIcon />}
  checkedIcon={<BookmarkIcon />}
  checked={acceptTnC}
  onChange={handleChange}
/>
```

물론 둘을 합쳐서 사용할 수도 있다.

여러개를 선택하도록 하려면 어떻게 해야할까? 라디오 버튼처럼 FormControl, FormLabel, FormGroup, FormControlLabel을 사용하면 된다.

```jsx
<FormControl error>
  <FormLabel>Skills</FormLabel>
  <FormGroup row>
    <FormControlLabel
      label="HTML"
      control={
        <Checkbox
          value="html"
          checked={skills.includes("html")}
          onChange={handleSkillChange}
        />
      }
    />
    <FormControlLabel
      label="CSS"
      control={
        <Checkbox
          value="css"
          checked={skills.includes("css")}
          onChange={handleSkillChange}
        />
      }
    />
    <FormControlLabel
      label="Javascript"
      control={
        <Checkbox
          value="javascript"
          checked={skills.includes("javascript")}
          onChange={handleSkillChange}
        />
      }
    />
  </FormGroup>
  <FormHelperText>Something</FormHelperText>
</FormControl>
```

FormHelperText는 FormControl안에 넣어줘야 같이 색이 바뀌기 때문에 잊지말자.

## Rating

기본 컴포넌트로 rating을 제공해주는 점이 재밌다.

```tsx
const [value, setValue] = useState<number | null>(null);
const handleChange = (_e: React.ChangeEvent<{}>, newValue: number | null) => {
  setValue(newValue);
};

<Rating
  value={value}
  onChange={handleChange}
  precision={0.5}
  icon={<FavoriteIcon color="error" />}
  emptyIcon={<FavoriteBorderIcon />}
  highlightSelectedOnly
/>;
```

onChange의 두번째 매개변수로 새로운 값이 들어온다. 그래서 해당 값으로 변경해주면 된다.  
또한 맨 처음 선택이 되지 않았거나, 같은 값을 눌렀다면 null이 들어오니 null도 들어올 수 있다고 타입을 적어주면 된다.  
precision 속성을 통해서 값을 세분화해서 넣을 수 있다. 또한 icon을 변경해서 커스터마이징 할 수 있고, highlightSelectedOnly 속성을 통해서 선택한 값만을 줄 수도 있다.(피드백 등을 줄때 웃는 애들 표시하면서 점수 줄 때 사용할 수 있음 )

## Autocomplete

Autocomplete 컴포넌트는 자동완성이 있는 인풋창이다.

```tsx
const skills = ["HTML", "CSS", "Javascript", "Typescript", "React"];

<Autocomplete
  options={skills}
  renderInput={(params) => <TextField {...params} label="Skills" />}
  value={value}
  onChange={(e: any, newValue: string | null) => setValue(newValue)}
  freeSolo
/>;
```

만약 skills 처럼 배열이 있다면 Autocomplete에 options에 전달해주면 된다.  
그러면 만약 사용자가 무언가를 입력했을 때 옵션중에 비슷한 값을 찾아줄 것이다.  
값은 onChange의 두번째 값으로 전달된다.  
freeSolo 속성을 넣으면 사용자가 입력한 값이 옵션중에 비슷한것이 없더라도 value를 입력할 수 있도록 해준다. 해당 값들은 객체 배열로 해도 된다. 적절하게 사용할 수 있으면 매우 좋을 듯 하다

## Box

Box는 기본적인 레이아웃을 잡는 컴포넌트다.  
그냥 div 임.

```jsx
<Box component="span">Runningwater</Box>
```

그런데 component 속성을 통해서 태그를 바꿀 수 있다.  
그냥 div일 뿐인데 사용할 이유가 있을까?  
그건 바로 속성들을 활용할 수 있기 때문이다.

```jsx
<Box
  sx={{
    backgroundColor: "primary.main",
    color: "white",
    height: "100px",
    width: "100px",
    padding: "16px",
    "&:hover": {
      backgroundColor: "primary.light",
    },
  }}
>
  Runningwater
</Box>
```

sx 속성을 통해서 css 속성을 줄 수 있다.  
여기서 중요한 점은 theme에 접근도 가능하다는 것(색을 보면 primary에 접근해있다.)과 &을 통해서 수도 클래스에도 접근해서 css를 주고 있다는 것이다.

```jsx
<Box display="flex" height="100px" width="100px" bgcolor="success.light" p={2}>
  Runningwater
</Box>
```

또한 기본 속성으로도 이렇게 css가 매칭되도록 만들어 놓았다는 것을 알 수 있다.

> 패딩 등은 숫자 1당 8px이다

## Stack과 Divider

stack은 div지만 **flex를 가지고 있는 div라고 할 수 있다. 단방향을 다룰 때 사용**할 수 있음.

```jsx
<Stack
  direction="row"
  spacing={2}
  sx={{
    border: "1px solid",
  }}
  divider={<Divider orientation="vertical" flexItem />}
>
  컨텐츠
</Stack>
```

기본 값은 column이다. spacing 속성을 통해서 안에 있는 컨텐츠 사이의 거리를 띄울 수 있다.  
또한 divider 속성이 있는데 컨텐츠 사이에 경계선을 넣을 수 있음. 여기서는 Divider 컴포넌트를 사용해서 선을 만들었다.

## Grid

Grid는 display grid 값을 가진 상자임.  
두개로 나눠지는 부모 그리드와 자식 그리드임.

```jsx
<Grid container my={4} rowSpacing={3} columnSpacing={1}>
  <Grid item xs={12} sm={6}>
    <Box p={2} bgcolor="primary.light">
      item 1
    </Box>
  </Grid>
  <Grid item xs={12} sm={6}>
    <Box p={2} bgcolor="error.light">
      item 2
    </Box>
  </Grid>
  <Grid item xs={12} sm={6}>
    <Box p={2} bgcolor="secondary.light">
      item 3
    </Box>
  </Grid>
  <Grid item xs={12} sm={6}>
    <Box p={2} bgcolor="success.light">
      item 4
    </Box>
  </Grid>
</Grid>
```

부모에는 container 속성을, 자식에게는 item 속성을 주면 된다.  
grid니까 gap을 줄수도 있고, rowSpacing, columnSpacing을 줘서 각 아이템 당 거리를 벌릴수 있다.  
모바일 퍼스트 이기 때문에 xs 값을 지정해두면 더 크기가 커져도 유지하고, 바꾸고 싶다면 그 위의 크기만큼 지정해주면 됨(12를 나눠쓴다)

xs의 크기를 지정만 해주고 아이템 중에 하나만 준다면, 하나가 해당 비율만큼 가지고 나머지는 나눠서 가짐.  
auto를 주면 컨텐츠 크기만큼 가짐

## Paper

배경색이 다른 곳 위에 Paper 컴포넌트를 올리면 종이의 질감을 올린 것처럼 보여진다.

```jsx
<Paper
  sx={{
    padding: "32px",
  }}
  elevation={4}
></Paper>
```

elevation 속성을 통해서 더 깊이를 줄 수 있다.

## Card

카드 컴포넌트는 single topic에 대해서 사용하는 컴포넌트다.

```jsx
<Box width="300px">
  <Card>
    <CardMedia
      component="img"
      height="140"
      image="https://source.unsplash.com/random"
      alt="unsplash image"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        React
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magnam
        quisquam quae nostrum facilis quam veniam. Vero tempore repudiandae
        quae! Repellat eligendi magni maxime et illum voluptatibus eum nemo
        voluptatem?
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn more</Button>
    </CardActions>
  </Card>
</Box>
```

기본적으로 부모의 크기를 다가져가기 때문에 Card 위에 박스에 width 속성을 주었다.  
아니면 카드에 줘도 된다.  
이미지 등은 CardMedia 컴포넌트, 텍스트 등의 컨텐츠 부분은 CardContent에 Typography로 구분하고, 버튼 등의 액션은 CardActions에 넣어주면 된다.

> 섹션을 나눌 떈 paper가 좋은 것 같고, 이미지 같은 것을 담고 있는 카드 컴포넌트 등을 만들 때 카드 컴포넌트가 좋은 것 같다.

## Accordion

아코디언 컴포넌트 만들 때 사용.

```jsx
<Accordion
  expanded={expanded === "panel1"}
  onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
  disableGutters
>
  <AccordionSummary
    id="panel1-header"
    aria-controls="panel1-content"
    expandIcon={<ExpandMoreIcon />}
  >
    <Typography>Accordion 1</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Typography>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
      reiciendis aliquid ullam pariatur laboriosam minima corporis possimus.
      Quasi, eius accusamus! Et eveniet qui adipisci sed temporibus quae
      delectus voluptates aut!
    </Typography>
  </AccordionDetails>
</Accordion>
```

위와 같이 아코디언 안에 AccordionSummary와 AccordionDetails을 넣어주면 됨  
해당 아코디언을 여러개 만들면 여러개의 아코디언 컴포넌트가 됨
disableGutters 속성을 줘서 아래 아코디언 컴포넌트와 거리를 안띄울 수 있다.

## Imagelist

Imagelist 컴포넌트는 핀터레스트 같이 이미지들로 구성된 페이지를 만들 때 좋은 것 같음.

```jsx
<ImageList
  sx={{
    width: 500,
    height: 450,
  }}
  cols={3}
  rowHeight={164}
>
  {Array.from({ length: 12 }, (v, i) => i + 1).map((item) => (
    <ImageListItem key={`title ${item}`}>
      <img
        src="https://source.unsplash.com/random"
        alt={`title ${item}`}
        loading="lazy"
      />
      <ImageListItemBar title={`title ${item}`} />
    </ImageListItem>
  ))}
</ImageList>
```

ImageListItem을 ImageList로 감싸면 됨

## NavBar

기본적으로 AppBar와 Toolbar로 만들면 됨.

```jsx
<AppBar position="fixed">
  <Toolbar>
    <IconButton size="large" edge="start" color="inherit" aria-label="logo">
      <CatchingPokemonIcon />
    </IconButton>
    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      POKEMONAPP
    </Typography>
    <Stack direction="row" spacing={2}>
      <Button color="inherit">Features</Button>
      <Button color="inherit">Pricing</Button>
      <Button color="inherit">About</Button>
      <Button color="inherit">Login</Button>
    </Stack>
  </Toolbar>
</AppBar>
```

AppBar는 Header 태그, Toolbar는 div인데 그 안에서 flex 속성을 가지고 있다.  
그래서 순서대로 정의하면 됨

Menu는 Menu 컴포넌트와 MenuItem 컴포넌트로 만드는데, 만들려는 형태는 다르지만 open과 onClose가 기본값인듯하다.

## Link

이동할 때 쓰는 a 태그.

```jsx
<Stack spacing={2} direction="row" m={4}>
  <Link href="#">Link</Link>
  <Link href="#" color="secondary" underline="hover">
    Secondary
  </Link>
  <Link href="#" color="secondary" underline="hover" variant="h2">
    Secondary
  </Link>
</Stack>
```

color, underline, variant 등을 줘서 꾸밀 수 있음
