배치 처리에 대해서 알아보겠습니다. 
배치 처리는 일정기간동안 데이터를 모아두었다가 대량의 데이터작업을 한번에 하는 것을 의미합니다. 또한 일정시간마다 주기적으로 실행 해야하는 작업을 말하기도합니다. 개발적으로 얘기한다면 작업을 스케줄링 하는 것을 의미합니다. 

배치처리를 하는 가장 간단한 방법은 OS의 스케줄링 기능을 사용하는 것입니다. 윈도우에는 작업스케줄러라는 기능이 있고, 리눅스에는 크론탭이 있습니다. 
리눅스의 크론탭만 간단하게 살펴보겠습니다. 

crontab -l 을 실행하면 현재 설정되어 있는 스케줄 잡이 보입니다. 
수정은 crontab -e 로 들어가서 수정할 수 있습니다. 

간단하게 우분투에서 한번 만들어보겠습니다. 

* * * * * echo "hello crontab $(date '+\%Y-\%m-\%d \%H:\%M:\%S')" >> /home/ubuntu/tmp/hello.txt