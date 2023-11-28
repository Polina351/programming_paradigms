% Rules
sum([], 0).
sum([H|T], N):-
    sum(T, X), N is X + H.

?- sum([1,2,3,4,5,6,7,8,9,10],N), write(N).