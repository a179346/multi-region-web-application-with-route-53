# multi-region-web-application-with-route-53
multi-region web application with route 53


## 1. Deploy Elastic Beanstalk WebServer in multiple AWS Regions

## 2. In Route 53, create traffic policy

![image](https://github.com/a179346/multi-region-web-application-with-route-53/blob/main/files/traffic-policy.PNG)

Use Latency rule and point to the two webserver.

[AWS Route 53 Documentation - Routing policy](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html)

## 3. Create policy record

![image](https://github.com/a179346/multi-region-web-application-with-route-53/blob/main/files/policy-record.PNG)

## 4. Test the result

![image](https://github.com/a179346/multi-region-web-application-with-route-53/blob/main/files/result1.PNG)

↑ Access from Asia.

![image](https://github.com/a179346/multi-region-web-application-with-route-53/blob/main/files/result2.PNG)

↑ Access from Europe.