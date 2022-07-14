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

## Breadcrumbs

Breadcrumbs가 빵 부스러기들을 뜻한다고 한다.  
사용자의 두번째 네비게이션인 것이다.

```jsx
<Breadcrumbs
  aria-label="breadcrumb"
  separator={<NavigateNext fontSize="small" />}
  maxItems={3}
>
  <Link underline="hover" href="#">
    Home
  </Link>
  <Link underline="hover" href="#">
    Catalogs
  </Link>
  <Link underline="hover" href="#">
    Accessoried
  </Link>
  <Typography color="text.primary">Shoes</Typography>
</Breadcrumbs>
```

separator 속성으로 구분자를 무엇으로 할 지 정할 수 있다.(아이콘도 되고, 문자도 됨)  
그 안에 링크들을 나열해주면 알아서 형태를 맞춰서 만들어준다.

## Drawer

서랍 형태의 컴포넌트.
사이드 네비게이션으로 사용할 형태이다.

```jsx
<>
  <IconButton
    size="large"
    edge="start"
    color="inherit"
    aria-label="logo"
    onClick={() => setIsOpen(true)}
  >
    <MenuIcon />
  </IconButton>
  <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
    <Box p={2} width="250px" textAlign="center" role="presentation">
      <Typography variant="h6" component="div">
        Side Panel
      </Typography>
    </Box>
  </Drawer>
</>
```

anchor 속성으로 위치를 조절하고, open으로 열고 닫는다. 기본적으로 z-index는 제일 높은듯 하다.

## SpeedDial

SpeedDial 컴포넌트는 우측 하단에 특정 행동을 바로 할 수 있도록 해주는 컴포넌트를 만들어준다.

```jsx
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";

export const MuiSpeedDial = () => {
  return (
    <SpeedDial
      ariaLabel="Navigation speed dial"
      sx={{ position: "absolute", bottom: 16, right: 16 }}
      icon={<SpeedDialIcon openIcon={<EditIcon />} />}
    >
      <SpeedDialAction icon={<CopyIcon />} tooltipTitle="Copy" />
      <SpeedDialAction icon={<PrintIcon />} tooltipTitle="Print" />
      <SpeedDialAction icon={<ShareIcon />} tooltipTitle="Share" />
    </SpeedDial>
  );
};
```

특이한 건 SpeedDialIcon은 material에서 갖고온다는 점이고, 나머지는 다 똑같다.  
SpeedDial 밑에 SpeedDialAction을 하면 알아서 잡아준다.

## BottonNavigation

모바일 앱의 bottom navigation 형태임.

```tsx
<BottomNavigation
  sx={{ width: "100%", position: "absolute", bottom: 0 }}
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
>
  <BottomNavigationAction label="Home" icon={<HomeIcon />} />
  <BottomNavigationAction label="Favorites" icon={<Favorite />} />
  <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
</BottomNavigation>
```

깔끔하게 완성되니까 좋다. 리액트 라우터랑 결합하는 것만 찾아보면 모바일 화면 만들 땐 mui 쓰는게 더 좋을 수도 있을 것 같다는 생각이 든다.

## Avatar

아바타는 프로필에서 이미지 그 형태 그대로다.

```jsx
<Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
```

이런식으로 주면 그냥 BW를 색으로 감싼 동그란 형태가 된다.

```jsx
<Avatar src="https://randomuser.me/api/portraits/women/79.jpg" alt="Jane Doe" />
```

위 형태는 이미지를 동그랗게 보여준다.

```jsx
<AvatarGroup max={3}>
  <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
  <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
  <Avatar
    src="https://randomuser.me/api/portraits/women/79.jpg"
    alt="Jane Doe"
  />
  <Avatar src="https://randomuser.me/api/portraits/men/51.jpg" alt="Jone Doe" />
</AvatarGroup>
```

만약 아바타 그룹으로 묶어준다면 아바타 들을 나열할 때 더 깔끔하게 표시할 수 있다.  
그리고 AvatarGroup의 max속성을 통해서 최대표시 아바타도 나타낼 수 있다.

## Badge

Badge 컴포넌트는 우측 상단에 숫자와 함께 나타는 그 아이콘이다.

```jsx
<Stack spacing={2} direction="row">
  <Badge badgeContent={5} color="primary">
    <MailIcon />
  </Badge>
  <Badge badgeContent={0} color="secondary" showZero>
    <MailIcon />
  </Badge>
  <Badge badgeContent={100} color="primary" max={999}>
    <MailIcon />
  </Badge>
</Stack>
```

badgeContent 속성에 주는 숫자가 표시되는 숫자고 기본적으로 0은 숨겨지고(showZero가 없으면), 최대가 99이다. 그래서 max를 999로 바꾸었다.

## List

Drawer과 함께 써서 side navigation을 만들 때 사용할 컴포넌트다.  
List 컴포넌트는 ul, ListItem은 li 태그이다. 리액트 라우터와 합치는 건 어디에 해야할 지, 또 해당 페이지로 들어갔을 때 하이라이트를 주는 방법도 알아봐야 할 것이다.

```jsx
<List>
  <ListItem disablePadding>
    <ListItemButton>
      <ListItemIcon>
        <ListItemAvatar>
          <Avatar>
            <MailIcon />
          </Avatar>
        </ListItemAvatar>
      </ListItemIcon>
      <ListItemText primary="List item 1" secondary="secondary text" />
    </ListItemButton>
  </ListItem>
  <Divider />
  <ListItem>
    <ListItemIcon>
      <MailIcon />
    </ListItemIcon>
    <ListItemText primary="List item 1" secondary="secondary text" />
  </ListItem>
  <Divider />
</List>
```

리스트에는 관련된 컴포넌트가 많다. Divider로 나누는 것 뿐만 아니라 sub title 도 사용해야 한다.

## Chip

Chip 컴포넌트는 태그 형태의 컴포넌트다.

```jsx
<Chip
  label="Delete"
  color="error"
  icon={<FaceIcon />}
  onClick={() => alert("Clicked")}
  onDelete={() => alert("Delete handler called")}
/>
```

특이한 건 onClick과 onDelete 속성이다. onClick을 넣으면 hover가 생기면서 클릭했을 때 특정 이벤트가 일어나도록 할 수 있고, onDelete를 추가하면 x 아이콘이 생기면서 지우거나 아니면 눌렀을 때 특정 이벤트가 일어나도록 할 수 있다.

## Tooltip

마우스를 갖다되었을 때 창이 뜨는 컴포넌트다.

```jsx
<Tooltip
  title="Delete"
  placement="right-end"
  arrow
  enterDelay={500}
  leaveDelay={200}
>
  <IconButton>
    <DeleteIcon />
  </IconButton>
</Tooltip>
```

title 속성이 뜨는 말이고, arrow 속성은 ui 화살표 형태가 된다.  
enterDelay와 leaveDelay는 마우스를 갖다 댈 때 지연시간을 주는 속성이다.

## Table

테이블 컴포넌트다.

```jsx
<TableContainer component={Paper} sx={{ maxHeight: "300px" }}>
  <Table aria-label="simple table" stickyHeader>
    <TableHead>
      <TableRow>
        <TableCell>Id</TableCell>
        <TableCell>First name</TableCell>
        <TableCell>Last name</TableCell>
        <TableCell align="center">Email</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {tableData.map((row) => (
        <TableRow
          key={row.id}
          sx={{
            "&:last-child td, &:last-child th": { border: 0 },
          }}
        >
          <TableCell>{row.id}</TableCell>
          <TableCell>{row.first_name}</TableCell>
          <TableCell>{row.last_name}</TableCell>
          <TableCell align="center">{row.email}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
```

컴포넌트 속성에 **component={Paper} 이것처럼 mui의 컴포넌트를 전달**할 수 도 있다.
나머지는 비슷한 형태로 간다.  
이것 대신에 react table 을 많이 쓰는 것 같다.

## Alert

경고창 띄우는 컴포넌트.

```jsx
<Alert variant="outlined" severity="error">
  This is an error alert
</Alert>
```

severity에는 error | warning | info | success가 들어갈 수 있다. 해당 값에 따라서 기본적인 색상이 결정됨. variant로 기본적인 디자인 결정됨.

```jsx
<>
  <Alert
    severity="success"
    action={
      <Button color="inherit" size="small">
        UNDO
      </Button>
    }
  >
    <AlertTitle>success</AlertTitle>
    This is an success alert
  </Alert>
  <Alert
    severity="success"
    icon={<CheckIcon fontSize="inherit" />}
    onClose={() => alert("Close alert")}
  >
    <AlertTitle>success</AlertTitle>
    This is an success alert
  </Alert>
</>
```

action에 버튼 등을 줘서 특정 행동을 할 수 있고, onClose 속성을 주면 닫는 x 버튼이 생긴다.  
AlertTitle 속성을 통해서 알림창의 헤더를 설정할 수 있다.

## Snackbar

어떤 상태에 대한 진행사항을 알려줄 때 snackbar 컴포넌트를 쓸 수 있다.  
alert와 함께 쓰면 더 좋다.

```tsx
const SnackbarAlert: any = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref) {
    return <Alert elevation={6} ref={ref} {...props} />;
  }
);

<Snackbar
  autoHideDuration={4000}
  open={customOpen}
  onClose={handleCustomClose}
  anchorOrigin={{
    vertical: "top",
    horizontal: "center",
  }}
>
  <SnackbarAlert onClose={handleCustomClose} severity="success">
    form submitted successfully
  </SnackbarAlert>
</Snackbar>;
```

forwardRef를 사용하는데 docs에서는 그냥 사용했던 것 같음.

snackbar 안에 Alert를 넣어주면 된다.

## Dialog

다이얼로그 컴포넌트는 화면의 맨 위에(컨텐츠 앞에) 컨텐츠를 띄우는 컴포넌트다.  
프로젝트에서는 여기서 폼을 넣고, 수정 및 읽기, 생성 등을 해야한다.

```jsx
<>
  <Button onClick={() => setOpen(true)}>Open dialog</Button>
  <Dialog
    aria-labelledby="dialog-title"
    aria-describedby="dialog-description"
    open={open}
    // onClose={() => setOpen(false)}
  >
    <DialogTitle id="dialog-title">Submit the test ?</DialogTitle>
    <DialogContent>
      <DialogContentText id="dialog-description">
        Are you sure you want to submit the test ? you will not be able to edit
        after submitting
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={() => setOpen(false)}>Cancel</Button>
      <Button onClick={() => setOpen(false)} autoFocus>
        Submit
      </Button>
    </DialogActions>
  </Dialog>
</>
```

기본적으로 버튼이나 특정 행동을 해서 띄울 것이기 때문에 open 속성이 기본적으로 들어가야 한다.  
DialogTitle, DialogContent,DialogActions 등으로 나누어서 컴포넌트를 작성하면 된다.  
form 형식은 DialogContent에 들어가면 될듯하다.
Dialog에 onClose 속성을 넣어주면 다이얼로그 밖을 클릭해도 꺼지는데, 꺼지지 않게 하려면 값을 넣지 않으면 된다.

## Progress

로딩바.

```jsx
<>
  <CircularProgress color="success" />
  <CircularProgress variant="determinate" color="success" value={60} />

  <LinearProgress color="success" />
  <LinearProgress variant="determinate" color="success" value={60} />
</>
```

CircularProgress은 원형, LinearProgress은 한 줄로 된 로딩바이다.
variant 값으로 determinate를 주면 멈춘 상태를 표현가능 하고, 아니면 계속 돌아감

## Skeleton

미리 컴포넌트 형태를 그려서 보여주면 사용자 경험에 더 좋다. 스켈레톤은 컴포넌트 형태를 회색으로 해서 미리 보여주는데 의미가 있다.  
중요한건 모든게 다 스켈레톤이 되면 좋은게 아니고, 처음부터 보여줄 데이터가 있을 때 스켈레톤을 사용하면 더 빨라보인다.

```jsx
<>
  <Skeleton variant="text" />
  <Skeleton variant="circular" width={40} height={40} />
  <Skeleton variant="rectangular" width={250} height={125} />
</>
```

variant를 통해서 형태를 만들면 된다.

```jsx
<Box sx={{ width: "250px" }}>
  {loading ? (
    <Skeleton variant="rectangular" width={256} height={144} animation="wave" />
  ) : (
    <img
      src="https://source.unsplash.com/random/256x144"
      alt="skeleton"
      width={256}
      height={144}
    />
  )}
  <Stack direction="row" spacing={1} sx={{ width: "100%", marginTop: "12px" }}>
    {loading ? (
      <Skeleton variant="circular" width={40} height={40} animation="wave" />
    ) : (
      <Avatar>RW</Avatar>
    )}
    <Stack sx={{ width: "80%" }}>
      {loading ? (
        <>
          <Typography variant="body1">
            <Skeleton variant="text" width="100%" animation="wave" />
          </Typography>
          <Typography variant="body2">
            <Skeleton variant="text" width="100%" animation="wave" />
          </Typography>
        </>
      ) : (
        <>
          <Typography variant="body1">React MUI Totorials</Typography>
          <Typography variant="body2">Good for you :)</Typography>
        </>
      )}
    </Stack>
  </Stack>
</Box>
```

loading 상태에 따라서 스켈레톤을 그려서 보여주면 된다.
Typography 컴포넌트 안에 Skeleton을 정의해주면 variant에 따라 다르게 표현됨

## LoadingButton

로그인이나 데이터를 받아올 때 사용할 버튼.  
로딩 상태에 따라서 로딩 ux를 보여줌

```bash
npm install @mui/lab
```

기본적인 컴포넌트 말고도 lab에 들어있는 것들을 사용하려면 lab을 설치해야한다.  
로딩버튼도 lab에 있음

```jsx
<LoadingButton variant="outlined" loadingIndicator="Loading..." loading>
  Fetch data
</LoadingButton>
```

loadingIndicator으로 로딩 시 멘트를 바꿀 수 있다. loading의 값에 따라서 로딩이냐 아니냐 구분한다.

```jsx
<LoadingButton
  variant="outlined"
  loadingPosition="start"
  startIcon={<SaveIcon />}
  loading
>
  Save
</LoadingButton>
```

아이콘을 사용하면 아이콘만 돌아가기 때문에 더 예쁨.

## Date and Time Picker

해당 컴포넌트를 사용하려면 추가적으로 다운로드 받아야 할 것들이 있다.

```bash
npm i date-fns @date-io/date-fns @mui/x-date-pickers
```

컴포넌트는 @mui/x-date-pickers에, 기능은 date-fns에, @date-io/date-fns에는 어댑터가 들어있는 것같다.

또한 locale을 바꾸기 위해서는 LocalizationProvider를 활용해야함.

```jsx
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

<LocalizationProvider dateAdapter={AdapterDateFns}></LocalizationProvider>;
```

위와 같은 형태로 감싼 다음 사용해야한다.

```jsx
<>
  <DatePicker
    label="Date Picker"
    renderInput={(params: any) => <TextField {...params} />}
    value={selectedDate}
    onChange={(newValue: any) => {
      setSelectedDate(newValue);
    }}
  />
  <TimePicker
    label="Time Picker"
    renderInput={(params: any) => <TextField {...params} />}
    value={selectedTime}
    onChange={(newValue: any) => {
      setSelectedTime(newValue);
    }}
  />
  <DateTimePicker
    label="Date Time Picker"
    renderInput={(params: any) => <TextField {...params} />}
    value={selectedDateTime}
    onChange={(newValue: any) => {
      setSelectedDateTime(newValue);
    }}
  />
</>
```

그러면 제대로 렌더링 되는 것을 확인 가능

## Tab

탭 컴포넌트는 TabContext로 TabList와 TabPanel을 감싸주면 된다.

```tsx
const [value, setValue] = useState("1");
const handleChange = (e: React.SyntheticEvent, newValue: string) => {
  setValue(newValue);
};

<TabContext value={value}>
  <Box sx={{ borderBottom: 1, borderColor: "divider", width: "300px" }}>
    <TabList
      aria-label="Tabs example"
      onChange={handleChange}
      textColor="secondary"
      indicatorColor="secondary"
      variant="scrollable"
      scrollButtons="auto"
    >
      <Tab label="Tab one" value="1" icon={<FavoriteIcon />} />
      <Tab
        label="Tab Two"
        value="2"
        icon={<FavoriteIcon />}
        iconPosition="start"
      />
      <Tab
        label="Tab Three"
        value="3"
        icon={<FavoriteIcon />}
        iconPosition="end"
      />
    </TabList>
  </Box>
  <TabPanel value="1">Panel One</TabPanel>
  <TabPanel value="2">Panel Two</TabPanel>
  <TabPanel value="3">Panel Three</TabPanel>
</TabContext>;
```

variant를 scrollable로 바꾸고, 길이를 고정시켜주면 스크롤 형태로 바뀜

## Timeline

타임라인(시간 흐름 등 순서에 따라 나열되는 것)을 나타낼 때 씀

## 반응형

```jsx
<Box
  sx={{
    width: {
      xs: 100, // 0
      sm: 200, // 600
      md: 300, // 900
      lg: 400, // 1200
      xl: 500, //1536
    },
    height: "300px",
    bgcolor: "primary.light",
  }}
>
  Box
</Box>
```

Box 컴포넌트 같은 경우엔 값에 객체를 줘서 반응형을 만들 수 있다.

```jsx
<Stack
  direction={{ xs: "column", sm: "row" }}
  spacing={{ xs: 1, sm: 2, md: 4 }}
></Stack>
```

스택도 값에 객체를 줘서 상황에 따라서 다르게 보여줄 수 있다.  
Grid는 속성으로 반응형을 구현한다.
