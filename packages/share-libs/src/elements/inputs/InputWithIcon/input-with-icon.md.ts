import {faHome, faKey, faSearch, faUser} from '@fortawesome/free-solid-svg-icons'

export const defaultSource = `
Input with left icon

#### Story Source
~~~jsx
<InputWithIcon icon={faUser} iconColor={'#3A3A3C'} onTextChange={()=>doSomething} placeholder={'Username'} />
~~~
`
export const disabledSource = `
Disabled input

#### Story Source
~~~jsx
<InputWithIcon icon={faKey} placeholder={'Password'} type={'password'} disabled/>
~~~
`

export const rightButtonSource = `
Input with icon on the right
 
#### Story Source
~~~jsx
<InputWithIcon icon={faHome} iconColor={'darkCyan'}  placeholder={'Address'} right/>
~~~
`

export const searchInputSource = `
Create search input with InputWithIcon element

#### Story Source
~~~jsx
<InputWithIcon icon={faSearch} type={'text'} placeholder={'Type for searching...'}  />
~~~
`