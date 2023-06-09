프레임워크는 개발시에 필요한 것들을 미리 만들어줘서, 작업을 편하게 해줍니다. 
개발시의 설정을 어떻게 하고, 코드는 어떻게 짜야하는지까지 제한을 하는 프레임워크가 있는반면,
최소한의 설정과 제약만을 가진 프레임워크도 있습니다. 
제가 설명드리는 프레임워크는 모두 서버측에서 API를 만드는데 필요한 프레임워크입니다. 

Node.js에는 express가 대표적이지만, NestJS를 적어두었습니다. 
express는 최소한의 제약만을 주고 서드파티 라이브러리로 확장해나가는 프레임워크입니다. 
반면 NestJS는 아키텍처구조를 어느정도 잡아줍니다. 
나름 최신기능인 데코레이터를 사용하여 별도의 설정없이 라우터나 미들웨어들을 설정할 수 있게 해줍니다. 
내부적으로 express와 fastify를 사용하고 있기 때문에, 기존의 express의 미들웨어를 사용할 수 있는 장점이 있습니다. 
하지만, 아직까지는 상용 프로그램을 위한 프레임워크로 보자면 자바의 스프링에 비해서는 보안이나 인증, 인가, 배치 같은 부분에서 아쉬운 부분이 있습니다. 
최근에 express가 발전이 미미하기 때문에 개인적으로는 NestJS가 조금더 발전 가능성이 있다고 생각하여 NestJS를 소개드렸습니다.

다음으로 자바진영의 스프링입니다. 스프링은 기업용 애플리케이션을 만드는데에 필요한 것들을 모두 갖추고 있는 프레임워크입니다. Spring webflux라고 불리는 리액티브 프로그래밍에서는 로그 추적이 조금 귀찮아진다던지, 멀티코어 활용이 어렵다던지 하는 아쉬운 부분이 있습니다만, 제가 사용해본 프레임워크중에는 기업용 애플리케이션을 작성하는데에는 가장 지원이 잘 되어 있는 프레임워크입니다. 다만 스프링은 태생자체가 기업용 애플리케이션을 작성을 돕는 프레임워크였기 때문에, 다른 프레임워크에 비해서 학습을 해야하는 것들이 상당히 많이 있습니다. 또한 같이 사용하는 jpa나 스프링 배치, 시큐리티등의 퀄리티도 굉장히 높은 반면 각각 책이 몇권씩 있을 정도로 학습량이 많습니다. 스프링은 참 좋지만, 자바가 발전이 더딘편이며 행사코드가 참 많습니다. 다만 이 부분은 최근에 코틀린이 나와서 어느정도 해소되었다고 생각합니다. 국내에서는 취업에 유리한 부분도 분명히 있습니다. 큰회사에서는 대부분 스프링을 사용하니까요. 많은 사람들이 사용하고 있기 때문에 커뮤니티도 잘 되어 있어서 모르는게 나오거나 문제 발생시에 물어볼 사람이 많이 있다는 것도 장점입니다. 

FastAPI는 파이썬 커뮤니티에서 최근에 인기가 있는 프레임워크입니다. 파이썬에는 장고와 플라스크라는 매우 유명한 프레임워크가 있습니다만, API만 작성하는 용도라면 앞으로는 FastAPI를 배워두는 것이 좋을 것 같다고 생각하여 소개드립니다. 최소한의 설정과 제약을 주는 프레임워크로, 플라스크와 비슷한 컨셉의 프레임워크입니다. 스프링과 비슷하게 의존 성주입을 사용합니다. Pydantic기반의 유효성 검증이 좋습니다. 스웨거 기반의 문서 자동화도 굉장히 잘되어 있습니다. async/await기반의 동시성을 도입하여 성능이 좋고, 빠르고, 배우기 쉽습니다.  기업용 애플리케이션을 작성하기 위해서는 스프링에 비해서는 직접 해야하하는 일이 많습니다. 

여기까지 프레임워크에 대해서 설명드렸습니다. 제가 설명 드린 것 이외에도 많은 프레임워크가 있습니다. 
백엔드 개발을 하기 위해서는 프레임워크 하나 정도는 깊게 공부를 해두는 것이 좋습니다. 

